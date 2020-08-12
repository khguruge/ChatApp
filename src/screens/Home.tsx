import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Grid,
  Row,
  Text,
  Button,
} from "native-base";
import { RouteProp } from "@react-navigation/native";
import { AuthParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { Colors } from "react-native/Libraries/NewAppScreen";
import color from "../constants/Color";
import * as firebase from "firebase";

type LoginRouteProps = RouteProp<AuthParamList, "Login">;
type LoginNavigationProps = StackNavigationProp<AuthParamList, "Login">;
type props = {
  route: LoginRouteProps;
  navigation: LoginNavigationProps;
};

const Login = ({ route, navigation }: props) => {
  const [email, setEmail] = React.useState("");
  const [pwd, setPWD] = React.useState("");
  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .catch((err) => alert(err));
  };
  return (
    <Container>
      <Content>
        <Grid>
          <Row
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../assets/icon.png")}
              />
            </View>
          </Row>
         
          
        </Grid>
        <Grid>
          <Row
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text style={styles.name}>K.H.Guruge</Text>
              <Text style={styles.index}>17000521</Text>
            </View>
          </Row>
         
          
        </Grid>
      </Content>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  inputbox: {
    width: 375,
    height: 50,
    backgroundColor: color.TRANSPARENT,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: color.WHITE,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#808080",
    width: 100,
    // height: 50,
    borderRadius: 25,
    // marginVertical: 10,
    // paddingVertical: 16,
    justifyContent: "center",
    marginHorizontal: 150,
    alignContent: "center",
  },
  LogoText: {
    fontSize: 40,
    fontWeight: "bold",
    color: color.BLACK,
    textAlign: "center",
  },
  icon: {
    alignSelf:"center",
    width:150,
    height:150,
  },
  name:{
      fontSize:28,
      
  },
  index:{
      fontSize:24,
      textAlign:'center'

  }
});
