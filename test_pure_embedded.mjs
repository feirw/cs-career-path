import fetch from 'node-fetch';

const answers = {
  "mode": "full",
  "locale": "en",
  "durationMs": 300000,
  "answers": {}
};

// Build pure embedded-focused answers
// Pick only options with embedded as PRIMARY (20+ points)
const embeddedChoices = {
  q01: "e",  // backend: 18, embedded: 18  
  q02: "e",  // backend: 16, embedded: 14
  q04: "a",  // embedded: 20
  q05: "a",  // embedded: 18
  q06: "a",  // backend: 18, embedded: 16
  q07: "a",  // embedded: 20
  q08: "a",  // embedded: 20
  q09: "a",  // backend: 18, embedded: 16
  q10: "a",  // qa: 18
  // Fill rest with highest embedded scores
  q11: "a", q12: "a", q13: "d", q14: "a", q15: "b",
  q16: "b", q17: "d", q18: "a", q19: "b", q20: "a",
  q21: "a", q22: "b", q23: "a", q24: "d", q25: "b",
  q26: "d", q27: "d", q28: "a", q29: "a", q30: "d",
  q31: "a", q32: "b", q33: "a", q34: "b", q35: "d",
  q36: "d", q37: "c", q38: "a", q39: "d", q40: "b",
  q41: "c", q42: "a", q43: "c", q44: "b", q45: "a",
  q46: "a", q47: "d", q48: "a", q49: "a", q50: "d",
  q51: "b", q52: "d", q53: "d", q54: "d", q55: "d",
  q56: "e", q57: "d", q58: "b", q59: "c", q60: "b"
};

answers.answers = embeddedChoices;

console.log('Submitting PURE embedded-focused answers...');
const res = await fetch('http://localhost:3000/api/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(answers)
});

const result = await res.json();
console.log('Result ID:', result.id);

// Wait for DB
await new Promise(r => setTimeout(r, 1000));

// Read from database
import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync('./data/submissions.sqlite');
const stmt = db.prepare('SELECT top_career, top_match, scores FROM submissions WHERE id = ?');
const row = stmt.get(result.id);

if (row) {
  console.log('\n✅ PURE Embedded-Focused Results:');
  console.log('  Top Career:', row.top_career.toUpperCase());
  console.log('  Top Match:', row.top_match + '%\n');
  
  const scores = JSON.parse(row.scores).sort((a, b) => b.match - a.match);
  scores.forEach(s => {
    const bar = '█'.repeat(Math.round(s.match / 5));
    console.log(`  ${s.careerId.padEnd(12)}: ${String(s.match).padStart(3)}%  ${bar}`);
  });
}
