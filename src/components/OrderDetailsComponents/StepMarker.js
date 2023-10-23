import { View, StyleSheet, Image } from "react-native";
import { Text } from "../styles";
import colors from "../../configs/colors";
import { STEP_CURRENT, STEP_NEXT, STEP_PASSED } from "../../configs/images";
import fonts from "../../configs/fonts";
import { OrderStatus } from "../../configs";

const StepItem = ({ title, isPassed, isCurrent, displaydate }) => {
  return (
    <View kye={title} style={styles.itemWrap}>
      <View style={styles.pointWrap}>
          <Image style={styles.image} source={isCurrent ? STEP_CURRENT : isPassed ? STEP_PASSED : STEP_NEXT} />
      </View>
      <View style={{ marginLeft: 15, flex: 1 }}>
          <Text fontFamily={fonts.bold} color={isCurrent ? colors.textBlack : isPassed ? colors.mainColor : colors.greyColor}>
          {title}
          </Text>
          {displaydate ? <Text> {displaydate} </Text> : <Text>--</Text>}
      </View>
    </View>
  )
}

const StepMarker = ({ deliveryDate='', data, statuses=[], currentStatus }) => {
  const isDelivered = (currentStatus == OrderStatus.DELIVERED);
  const deliveredData = data.find(item => item.status == OrderStatus.DELIVERED);
  const crStatus = statuses.find(st => st.status == OrderStatus.DELIVERED);
    return (
      <View style={{ flex: 1 }}>
        {!isDelivered && <View style={styles.verticalLine}></View>}
        <View style={styles.verticalWrap}>
          { 
            isDelivered ?
            <StepItem title={deliveredData.title} displaydate={`on ${deliveryDate} (${crStatus.date})`} isPassed={true} />
            :
            data.map((item) => {
                const isCurrent = currentStatus == item.status;
                const crStatus = statuses.find(st => st.status == item.status);
                const isPassed = crStatus != null
                return <StepItem key={item.title} title={item.title} isPassed={isPassed}  isCurrent={isCurrent} displaydate={crStatus ? crStatus.date : null} />
              }
            )
          }
        </View>
      </View>
    );
  };

  export default StepMarker;


  const styles = StyleSheet.create({
    verticalLine: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: colors.greyColor,
      width: 2,
      height: '80%',
      position: 'absolute',
      marginLeft: 25,
      marginTop: 20,
    },
    verticalWrap: {
      justifyContent: 'space-between',
      height: '100%',
    },
    itemWrap: {
      height: 40,
      marginBottom: 30,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    pointWrap: {
      borderRadius: 8,
      borderWidth: 1,
      
      height: 40,
      width: 40,
      borderColor: colors.greyColor,
      backgroundColor: 'white',
      marginLeft: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    firstPoint: {
      backgroundColor: 'red',
      borderRadius: 20,
      height: 10,
      width: 10,
      marginLeft: 10,
    },
    markerText: { color: 'white' },
    currentMarker: { color: 'black' },
    image: {
        
        height: 22,
        width: 20,
        resizeMode: 'cover'
    }
  });