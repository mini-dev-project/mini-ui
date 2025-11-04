#!/usr/bin/env node
import fs from "fs";
import path from "path";
import chalk from "chalk";

const projectName = process.argv[2] || "mini-project";
const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(chalk.red(`❌ Folder "${projectName}" already exists.`));
  process.exit(1);
}

fs.mkdirSync(projectPath);
fs.writeFileSync(path.join(projectPath, "README.md"), `# ${projectName}`);
console.log(chalk.cyan(`🚀 Created new project: ${projectName}`));
