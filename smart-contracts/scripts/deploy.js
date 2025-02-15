const { run } = require("hardhat");

async function main() {
  await run("deploy");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });