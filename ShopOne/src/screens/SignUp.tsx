import React, { useState } from 'react';
import { ScreenContainer } from '@components/styles';
import { Button } from '@components/elements';
import { TextInput } from '@react-native-material/core';
import { useREST, userEp } from '@api';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {

    const [userCred, setUserCred] = useState<{ name: string, password: string }>({ name: '', password: '' });
    const { goBack } = useNavigation();
    const { post } = useREST();
    const { signUp } = userEp;


    return (
        <ScreenContainer>
            <TextInput
                variant="outlined"
                label="user"
                style={{ marginVertical: 5, width: '90%' }}
                value={userCred.name}
                onChangeText={(text) => {
                    setUserCred({ ...userCred, name: text })
                }}
            />
            <TextInput
                secureTextEntry
                variant="outlined"
                label="password"
                style={{ marginVertical: 5, width: '90%' }}
                value={userCred.password}
                onChangeText={(password) => {
                    setUserCred({ ...userCred, password: password })
                }}
            />
            <Button
                extraProps={{ width: '90%' }}
                label='Sign Up'
                onPress={() => {
                    post(signUp, userCred)
                        .then((res) => {
                            res.status === 200 && goBack()
                        })
                }}
            />
            <Button
                label='Cancel'
                extraProps={{ backgroundColor: 'transparent', color: 'blue' }}
                onPress={goBack}
            />
        </ScreenContainer>
    )
}

export default SignUp