#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');
const { createProject } = require('./commands/create');
const { terminateProject } = require('./commands/terminate');
const { installDependencies } = require('./commands/installDeps');

const program = new Command();

program
  .name('cityapp')
  .description('CLI para crear y empaquetar apps Java y WebApp')
  .version('1.0.0');

program
  .command('create')
  .description('Crear un nuevo proyecto')
  .argument('<type>', 'Tipo de proyecto: java o webapp')
  .argument('<name>', 'Nombre del proyecto')
  .action(async (type, name) => {
    try {
      await createProject(type, name);
      const projectPath = path.resolve(process.cwd(), name);
      await installDependencies(projectPath, type);
    } catch (error) {
      console.error('Error creando proyecto:', error.message);
      process.exit(1);
    }
  });

program
  .command('terminate')
  .description('Empaquetar proyecto y generar ejecutable')
  .argument('<type>', 'Tipo de terminación: javapp o webapp')
  .argument('<path>', 'Ruta del proyecto')
  .action(async (type, projectPath) => {
    try {
      await terminateProject(type, path.resolve(process.cwd(), projectPath));
    } catch (error) {
      console.error('Error terminando proyecto:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
