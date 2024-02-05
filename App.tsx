
// import { ContadorScreen } from "./src/screens/ContadorScreen";
// import { HolaMundoScreen } from "./src/screens/HolaMundoScreen";

import { SafeAreaView } from "react-native";
// import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
// import { DimensionesScreen } from "./src/screens/DimensionesScreen";
// import { PositionScreen } from "./src/screens/PositionScreen";
import { FlexScreens } from "./src/screens/FlexScreens";

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
  {/* <HolaMundoScreen/>
  <ContadorScreen/> */}
  {/* <BoxObjectModelScreen/> */}
  {/* <DimensionesScreen/> */}
  {/* <PositionScreen/> */}
  <FlexScreens/>
  </SafeAreaView>
  )
}

export default App;