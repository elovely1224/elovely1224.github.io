export const config = /*json-start*/{
  "mainAssemblyName": "VerifyLibrary.dll",
  "resources": {
    "hash": "sha256-2ZCJADiyxeCyzH8P/c29bMYOfPwjBS2IAhumSSWMWBo=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.wasm",
        "integrity": "sha256-yDHvVENYCE38N/NdhxZyAMJ2S5wJCag+8Pby3ruZNSw="
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "System.Private.CoreLib.wasm",
        "name": "System.Private.CoreLib.wasm",
        "integrity": "sha256-tw2j3zJsqy6uwgjOU9Y3VoJBl9Fv2Hz/HheMM8D9Ybs="
      },
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.wasm",
        "name": "System.Runtime.InteropServices.JavaScript.wasm",
        "integrity": "sha256-G8jcf7T4o9j3M+bffXM4cey5TTNb5pLboMG0kEzJqs8="
      }
    ],
    "assembly": [
      {
        "virtualPath": "MessagePack.Annotations.wasm",
        "name": "MessagePack.Annotations.wasm",
        "integrity": "sha256-XbmMubMJOd2S2IaMaFlLlLbtT0F4cylQifCaKJ9xAOk="
      },
      {
        "virtualPath": "MessagePack.wasm",
        "name": "MessagePack.wasm",
        "integrity": "sha256-OFRSfk8HpoVcgNyB/mCgxlGI925pnxzS3hEkvRCL5yY="
      },
      {
        "virtualPath": "System.Collections.Concurrent.wasm",
        "name": "System.Collections.Concurrent.wasm",
        "integrity": "sha256-MX9GE/4VDMseUC7hagltDhWcfInWgy0NoPYTkPIKkZ0="
      },
      {
        "virtualPath": "System.Collections.wasm",
        "name": "System.Collections.wasm",
        "integrity": "sha256-Ag5AFrrOeoqFC2QoXIbCtpaUth4/+VIJKsuqdQfwaew="
      },
      {
        "virtualPath": "System.Collections.Immutable.wasm",
        "name": "System.Collections.Immutable.wasm",
        "integrity": "sha256-M8c7atipg/WfUxRlnNVT+8dKrLNdRvo4Nwh1zm4B31g="
      },
      {
        "virtualPath": "System.Linq.wasm",
        "name": "System.Linq.wasm",
        "integrity": "sha256-gPdnY4kX9gLWNrDywuz2FKlErXaaCk9rjTGqbCZrPnA="
      },
      {
        "virtualPath": "System.Linq.Expressions.wasm",
        "name": "System.Linq.Expressions.wasm",
        "integrity": "sha256-JiFAH/NbsXg61W83hY6qDkY1diAE1diMEmhmOJiVj0c="
      },
      {
        "virtualPath": "System.Memory.wasm",
        "name": "System.Memory.wasm",
        "integrity": "sha256-niAbYsCh1miK2m2oj1FUwaf38q2ESpq9YRTuF+8M7/A="
      },
      {
        "virtualPath": "System.ObjectModel.wasm",
        "name": "System.ObjectModel.wasm",
        "integrity": "sha256-o5lbq541AutMPgLU8GHygr7deSZ61akGOuHEO1BJ90Q="
      },
      {
        "virtualPath": "System.Private.Uri.wasm",
        "name": "System.Private.Uri.wasm",
        "integrity": "sha256-OOc2IyGEO+VjUnBFJuGtuG6Z8ddYnRLYrwQxvqdBdIg="
      },
      {
        "virtualPath": "System.Runtime.Numerics.wasm",
        "name": "System.Runtime.Numerics.wasm",
        "integrity": "sha256-2xpJpniX7muGEK/Oys+vfHa9t1B92gs7C6RFNBxnolM="
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.wasm",
        "name": "System.Runtime.Serialization.Primitives.wasm",
        "integrity": "sha256-nZHyhrDIBvquXIubcKiHV+jSUR64Tbo3F/ymmpd8/BU="
      },
      {
        "virtualPath": "System.Security.Cryptography.wasm",
        "name": "System.Security.Cryptography.wasm",
        "integrity": "sha256-HelvTCzs2o/g/I3z+rG81l1oGE+P+vT6wMj8GAJZGJc="
      },
      {
        "virtualPath": "System.Text.RegularExpressions.wasm",
        "name": "System.Text.RegularExpressions.wasm",
        "integrity": "sha256-zFjAccjt7WV0KDkPkvlVmdGUBUd4P2a688BCcIzZKU4="
      },
      {
        "virtualPath": "VerifyLibrary.wasm",
        "name": "VerifyLibrary.wasm",
        "integrity": "sha256-bEE3iqZXKcjF2teSkVn8I61m+Unx/SOrJojxHPS8+24="
      }
    ]
  },
  "debugLevel": 0,
  "globalizationMode": "invariant",
  "runtimeConfig": {
    "runtimeOptions": {
      "configProperties": {
        "Microsoft.Extensions.DependencyInjection.VerifyOpenGenericServiceTrimmability": true,
        "System.ComponentModel.DefaultValueAttribute.IsSupported": false,
        "System.ComponentModel.Design.IDesignerHost.IsSupported": false,
        "System.ComponentModel.TypeConverter.EnableUnsafeBinaryFormatterInDesigntimeLicenseContextSerialization": false,
        "System.ComponentModel.TypeDescriptor.IsComObjectDescriptorSupported": false,
        "System.Data.DataSet.XmlSerializationIsSupported": false,
        "System.Diagnostics.Debugger.IsSupported": false,
        "System.Diagnostics.Metrics.Meter.IsSupported": false,
        "System.Diagnostics.Tracing.EventSource.IsSupported": false,
        "System.Globalization.Invariant": true,
        "System.TimeZoneInfo.Invariant": false,
        "System.Globalization.PredefinedCulturesOnly": true,
        "System.Linq.Enumerable.IsSizeOptimized": true,
        "System.Net.Http.EnableActivityPropagation": false,
        "System.Net.Http.WasmEnableStreamingResponse": true,
        "System.Net.SocketsHttpHandler.Http3Support": false,
        "System.Reflection.Metadata.MetadataUpdater.IsSupported": false,
        "System.Resources.ResourceManager.AllowCustomResourceTypes": false,
        "System.Resources.UseSystemResourceKeys": true,
        "System.Runtime.CompilerServices.RuntimeFeature.IsDynamicCodeSupported": true,
        "System.Runtime.InteropServices.BuiltInComInterop.IsSupported": false,
        "System.Runtime.InteropServices.EnableConsumingManagedCodeFromNativeHosting": false,
        "System.Runtime.InteropServices.EnableCppCLIHostActivation": false,
        "System.Runtime.InteropServices.Marshalling.EnableGeneratedComInterfaceComImportInterop": false,
        "System.Runtime.Serialization.EnableUnsafeBinaryFormatterSerialization": false,
        "System.StartupHookProvider.IsSupported": false,
        "System.Text.Encoding.EnableUnsafeUTF7Encoding": false,
        "System.Text.Json.JsonSerializer.IsReflectionEnabledByDefault": false,
        "System.Threading.Thread.EnableAutoreleasePool": false
      }
    }
  }
}/*json-end*/;