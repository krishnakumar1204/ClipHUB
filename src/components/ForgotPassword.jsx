import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <form >
                <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>
                    <Heading>Welcome Back!</Heading>
                    <Input placeholder={'Enter Your Email...'} type={'email'} required focusBorderColor={'purple.500'} />
                    
                    <Button colorScheme={'purple'} type={'submit'}>Reset Your Password</Button>
                    <Text textAlign={'right'}>
                        New User?{' '}
                        <Button variant={'link'} colorScheme={'purple'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default ForgetPassword;
