const { exec } = require("child_process");

async function runTests() {
  console.log("Running backend tests...");
  exec("cd backend && npm test", (error, stdout, stderr) => {
    console.log(stdout);
    if (error) console.error(stderr);
    
    console.log("\nRunning contract tests...");
    exec("cd smart-contracts && npx hardhat test", (error, stdout, stderr) => {
      console.log(stdout);
      process.exit(error ? 1 : 0);
    });
  });
}

runTests();