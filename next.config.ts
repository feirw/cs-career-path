import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Οι γραμματοσειρές του PDF διαβάζονται με fs τη στιγμή του request. Το
   * αυτόματο tracing του Next δεν τις εντοπίζει, οπότε χωρίς αυτό λείπουν από
   * το serverless bundle και η δημιουργία PDF σκάει μόνο στην παραγωγή.
   */
  outputFileTracingIncludes: {
    "/api/results/[id]/pdf": ["./src/assets/fonts/**"],
  },
};

export default nextConfig;
