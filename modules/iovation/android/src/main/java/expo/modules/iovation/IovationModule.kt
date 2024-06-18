package expo.modules.iovation

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import com.iovation.mobile.android.FraudForceConfiguration
import com.iovation.mobile.android.FraudForceManager

class IovationModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("Iovation")

	OnCreate () {
		val configuration = FraudForceConfiguration.Builder()
			.subscriberKey("M1WrRSwcjUBQmHamij3DxQJWr00YzfRhXaMkI+zhhiY=")
			.enableNetworkCalls(true)
			.build()

		FraudForceManager.initialize(configuration, applicationContext)
	}

    Function("hello") {
      "Hello world! 👋"
    }
  }
}
