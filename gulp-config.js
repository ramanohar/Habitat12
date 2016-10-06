module.exports = function () {
  var instanceRoot = "d:\\inetpub\\wwwroot\\sc81u3";
  var config = {
    websiteRoot: instanceRoot + "\\Website",
    sitecoreLibraries: instanceRoot + "\\Website\\bin",
    licensePath: instanceRoot + "\\Data\\license.xml",
    solutionName: "Habitat",
    buildConfiguration: "Debug",
    runCleanBuilds: false
  };
  return config;
}