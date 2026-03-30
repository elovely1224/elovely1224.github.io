// Set up the .NET WebAssembly runtime
import { dotnet } from './dotnet.js'

// Get exported methods from the .NET assembly
const { getAssemblyExports, getConfig } = await dotnet
    .withDiagnosticTracing(false)
    .create();

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

// Display the result of the .NET method
document.getElementById("verify").onclick = function() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    globalThis.alert(exports.VerifyCode(globalThis.window.location.href, firstName, lastName));
};