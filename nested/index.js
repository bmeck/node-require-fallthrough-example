console.log('watch as 2 different fixture/ directories are used');
for (let path of ['fixture', 'fixture/index', 'fixture/in-nested']) {
  console.log(JSON.stringify(path), '=>', JSON.stringify(require.resolve(path)))
}
