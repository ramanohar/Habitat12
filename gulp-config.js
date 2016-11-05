module.exports = function () {
  var instanceRoot = "d:\\inetpub\\wwwroot\\habitat";
  var config = {
    websiteRoot: instanceRoot + "\\Website",
    sitecoreLibraries: instanceRoot + "\\Website\\bin",
    licensePath: instanceRoot + "\\Data\\license.xml",
    solutionName: "Habitat",
    buildConfiguration: "Debug",
	unicornSecret: "kl3KGocnbp3L9ncCZYRPwFwiW7jW2UhE02T3GZU6sL5rTCKZzsRyRYLtGzuh8Li",
    runCleanBuilds: false
  };
  return config;
}