import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('./data/submissions.sqlite');
const stmt = db.prepare('SELECT id, top_career, top_match, scores FROM submissions ORDER BY created_at DESC LIMIT 1');
const row = stmt.get();

if (row) {
  console.log('✅ Latest submission (embedded-focused answers):');
  console.log('  ID:', row.id);
  console.log('  Top Career:', row.top_career.toUpperCase());
  console.log('  Top Match:', row.top_match + '%');
  console.log('');
  
  const scores = JSON.parse(row.scores);
  console.log('All career scores:');
  scores.forEach(s => {
    const bar = '█'.repeat(Math.round(s.match / 5));
    console.log(`  ${s.careerId.padEnd(12)}: ${String(s.match).padStart(3)}%  ${bar}`);
  });
} else {
  console.log('❌ No submissions found');
}
