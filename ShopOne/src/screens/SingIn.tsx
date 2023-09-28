import React, { useState } from 'react';
import { ScreenContainer } from '@components/styles';
import { Button } from '@components/elements';
import { TextInput } from '@react-native-material/core';
import { UserStore } from '@store';
import { useNavigation } from '@react-navigation/native';
import { userEp, useREST } from '@api';


const SignIn = () => {

    const [userCred, setUserCred] = useState<{ name: string, password: string }>({ name: '', password: '' });
    const { goBack } = useNavigation();
    const { signInFn } = UserStore;
    const { put } = useREST();



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
                label='Sign In'
                onPress={() => {
                    signInFn(userCred)
                }
                }

            />
            <Button
                label='Cancel'
                extraProps={{ backgroundColor: 'transparent', color: 'blue' }}
                onPress={goBack}
            />
        </ScreenContainer>
    )
}

export default SignIn