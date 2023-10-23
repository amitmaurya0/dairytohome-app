import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Input from '../Input'
import { AddressContainer, AddressFromContainer } from './styled'
import { BGOverlvay, Divider, RowView, Spacer, Text } from '../styles';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';
import Button from '../Button';
import { BACK_ICON, CARET_DOWN } from '../../configs/images';
import { showSnackBarOne, snackBarType } from '../showSnackBarOne';
import strings from '../../configs/strings';
import { addAddress } from '../../apis/user';
import { useSelector } from 'react-redux';
import { useFetchApartments } from '../../hooks'

const AddAddress = ({ onCancel, visible, onSuccess, address=null }) => {
  const [addressTitle, setAddressTitle] = useState('');
  const [name, setName] = useState('');
  const [apartmentId, setApartmentId] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [area, setArea] = useState('');
  const [phone, setPhone] = useState('');
  const [processing, setProcessing] = useState(false);
  const { apartments, error, isLoading } = useFetchApartments();
  const { latitude, longitude } = useSelector((state) => state.location);

  const validateInput = () => {
    console.log(apartmentId, addressTitle, name)
    if (!apartmentId) {
      showSnackBarOne('Please select your apartment.', snackBarType.error);
      return false;
    }

    if (!addressTitle.trim()) {
      showSnackBarOne('Address Title is required', snackBarType.error);
      return false;
    }

    if (!name.trim()) {
      showSnackBarOne('Name is required', snackBarType.error);
      return false;
    }
  

    if (!addressLine1.trim()) {
      showSnackBarOne('Please add your floor and flat no.', snackBarType.error);
      return false;
    }

   /*  if (!area.trim()) {
      showSnackBarOne('Area is required', snackBarType.error);
      return false;
    } */

    if (!phone.trim() || isNaN(phone)) {
      showSnackBarOne('Valid phone number is required', snackBarType.error);
      return false;
    }

    return true;
  };

  const onCancelPress = () => {
    onCancel();
  }
  
  useEffect(() => {
    if(address) {

      setApartmentId(address.apartmentId);
      setAddressTitle(address.title);
      setName(address.name);
      setAddressLine1(address.addressLine1);
      setArea(address.area);
      setPhone(address.phone);
    }
  }, [address])

  const handleSubmit = async () => {
    if (validateInput()) {
      
      try {
        setProcessing(true);
        const data = { title: addressTitle, apartmentId, name, addressLine1, area, phone, latitude, longitude };
        if(address) {
          data.id = address.id;
        }
        const resp = await addAddress(data);
        if(resp.status) {
          showSnackBarOne(resp.message, snackBarType.success);
          onSuccess();
        } else {
          showSnackBarOne(resp.message, snackBarType.error);
        }
        setProcessing(false);
      } catch (error) {
        console.log(error);
        showSnackBarOne(strings.general_error_msg, snackBarType.error);
        setProcessing(false);
      }
    }
  };



  return (
  <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
    >   
    <AddressContainer>
      <BGOverlvay />
        <AddressFromContainer>
          <RowView sb={false}>
            <TouchableOpacity onPress={onCancelPress}>
              <Image source={BACK_ICON} style={{ height: 20, width: 20, marginRight: 5 }}></Image>
              
            </TouchableOpacity>
            <Text color={colors.mainColor} fontFamily={fonts.bold}>Add New Address</Text>
            
            
          </RowView>
          <Spacer space={15} />
          <Divider />
          <Spacer space={15} />
         <KeyboardAvoidingView behavior="height">
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text fontFamily={fonts.bold}>Select Your Apartment</Text>
                <Spacer />
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={apartments}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select apartment"
                  searchPlaceholder="Search..."
                  value={apartmentId}
                  onChange={item => {
                    console.log('item=====>', item);
                    setApartmentId(item.value);
                  }}
                 
                />
                <Spacer space={10} />
                <Input title="Address Title" 
                  placeholder="Enter your address title"
                  value={addressTitle}
                  onChange={setAddressTitle} 
                />
                <Input title="Name" 
                  placeholder="Enter your name"
                  value={name}
                  onChange={setName} />
                <Input title="Floor/Flat No."
                  placeholder="Address Line 1"
                  value={addressLine1}
                  onChange={setAddressLine1}
                 />
                {/* <Input title="Area"
                  placeholder="Enter your area"
                  value={area}
                  onChange={setArea}
                /> */}
                <Input title="Phone"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={setPhone}
                  keyboardType="numeric"
                />
                <Spacer space={50} />
            </ScrollView>
         </KeyboardAvoidingView>
           <RowView>
            <Button full transparent onPress={onCancelPress}>Cancel</Button>
            <Spacer width={'5'} />
            <Button full loading={processing} onPress={handleSubmit}>Continue</Button>
           </RowView>
        </AddressFromContainer>
    </AddressContainer>
    </Modal>
    
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});


export default AddAddress