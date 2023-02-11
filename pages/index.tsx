import { Container, Text, Box, Button } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Container m="0" p="0" maxW="100%" w="100%" height="100vh">
        <Container maxW="100%" w="100%" h="51%" bg="#6B46C1">
          <Container
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            lineHeight={{ lg: "60px", md: "50px", base: "35px" }}
            pt="42px"
            maxW="100%"
          >
            <Text
              fontSize={{ base: "30px", md: "37px", lg: "44px" }}
              fontWeight={{ lg: "bold", base: "semibold", md: "bold" }}
              color="#F7FAFC"
            >
              Simple pricing for your business
            </Text>
            <Text
              mt={{ base: "20px", lg: "30px", md: "30px" }}
              fontSize={{ base: "15px", md: "20px", lg: "23px" }}
              color="#F7FAFC"
              lineHeight={{lg: '10px', md: '0px', base: '25px'}}
            >
              Plans that are carefully crafted to suit your business.
            </Text>
          </Container>
          <Container
            display="flex"
            alignItems="center"
            justifyContent="center"
            h='60vh'
            mt="40px"
            maxW="100%"
            p="0"
          >
            <Box
              w={{ lg: "74%", md: "90%", base: "100%" }}
              h={{ lg: "310px", md: "310px", base: "auto" }}
              bg="white"
              boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
              borderRadius="12px"
              display="flex"
              flexDirection={{ lg: "row", md: "row", base: "column" }}
              maxW="100%"
              pb={{ lg: "0px", md: "0px", base: "30px" }}
            >
              <Box
                maxW="100%"
                w={{ lg: "35.6%", md: "35.6%", base: "100%" }}
                h={{ lg: "100%", md: "100%", base: "300px" }}
                bg="rgba(101, 44, 211, 0.1)"
                borderTopLeftRadius="12px"
                borderBottomLeftRadius={{ lg: "12px", md: "12px", base: "0px" }}
              >
                <Container
                  maxW="100%"
                  lineHeight="50px"
                  textAlign="center"
                  pt="40px"
                >
                  <Text
                    fontSize={{ lg: "23px", md: "23px", base: "20px" }}
                    color="#171923"
                    fontWeight="700"
                  >
                    Premium PRO
                  </Text>
                  <Text
                    fontSize={{ lg: "59px", md: "59px", base: "50px" }}
                    color="#171923"
                    fontWeight="700"
                  >
                    $329
                  </Text>
                  <Text
                    fontSize={{ lg: "17px", md: "17px", base: "15px" }}
                    color="#171923"
                    fontWeight="500"
                  >
                    billed just once
                  </Text>
                </Container>
                <Container
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  pt="13px"
                  maxW="100%"
                >
                  <Button
                    w="78%"
                    h="50px"
                    bg="#805AD5"
                    borderRadius="8px"
                    fontSize="16px"
                    color="#F7FAFC"
                    fontWeight="600"
                  >
                    Get Started
                  </Button>
                </Container>
              </Box>
              <Box
                m="0"
                p="0"
                maxW="100%"
                w={{ lg: "64.4%", md: "64.4%", base: "95%" }}
                h="100%"
              >
                <Container
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  maxW="100%"
                  m="0"
                  p="0"
                >
                  <Container m="0" p="0" maxW="100%" w="85%" mt="27px">
                    <Text
                      fontSize={{ lg: "19px", md: "19px", base: "15px" }}
                      color="#2D3748"
                      fontWeight="400"
                    >
                      Access these features when you get this pricing package
                      for your business.
                    </Text>
                    <Container m="0" p="0" maxW="100%" mt="25px">
                      <Container
                        m="0"
                        p="0"
                        display="flex"
                        alignItems="center"
                        gap="13px"
                      >
                        <Image width={23} height={23} src={'/../public/Assets/CheckMarkIcon.png'} alt="check" />
                        <Text
                          fontSize={{ lg: "18px", md: "18px", base: "15px" }}
                          color="#2D3748"
                        >
                          International calling and messaging API
                        </Text>
                      </Container>
                      <Container
                        display="flex"
                        alignItems="center"
                        gap="13px"
                        mt="17px"
                        maxW="100%"
                        p="0"
                      >
                        <Image width={23} height={23} src={'/../public/Assets/CheckMarkIcon.png'} alt="check" />
                        <Text
                          fontSize={{ lg: "18px", md: "18px", base: "15px" }}
                          color="#2D3748"
                        >
                          Additional phone numbers
                        </Text>
                      </Container>
                      <Container
                        display="flex"
                        alignItems="center"
                        gap="13px"
                        mt="17px"
                        maxW="100%"
                        p="0"
                      >
                        <Image width={23} height={23} src={'/../public/Assets/CheckMarkIcon.png'} alt="check" />
                        <Text
                          fontSize={{ lg: "18px", md: "18px", base: "15px" }}
                          color="#2D3748"
                        >
                          Automated messages via Zapier
                        </Text>
                      </Container>
                      <Container
                        display="flex"
                        alignItems="center"
                        gap="13px"
                        mt="17px"
                        maxW="100%"
                        p="0"
                      >
                        <Image width={23} height={23} src={'/../public/Assets/CheckMarkIcon.png'} alt="check" />
                        <Text
                          fontSize={{ lg: "18px", md: "18px", base: "15px" }}
                          color="#2D3748"
                        >
                          24/7 support and consulting
                        </Text>
                      </Container>
                    </Container>
                  </Container>
                </Container>
              </Box>
            </Box>
          </Container>
          <Container
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={{lg: "75px", md: '75px', base: '20px'}}
            maxW="100%"
            p="0"
          >
            <Container
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              flexDirection={{lg: 'row', md: 'row', base: 'column'}}
              h={{lg: '0px', md: '0px', base: '220px'}}
              w={{lg: "70%", md: '70%', base: '95%'}}
              maxW="100%"
              p="0"
              m="0"
            >
              <Container
                maxW="100%"
                display="flex"
                alignItems="center"
                gap="20px"
                p="0"
                m="0"
              >
                <Image width={46} height={46} src={'/../public/Assets/advantagesIcon.png'} alt="adv" />
                <Text
                  fontSize={{ lg: "18px", md: "13px", base: "15px" }}
                  color="#171923"
                  fontWeight="700"
                  w={{lg: "220px", md: '190px', base: '90%'}}
                >
                  30 days money back Guarantee
                </Text>
              </Container>
              <Container
                maxW="100%"
                display="flex"
                alignItems="center"
                gap="20px"
                p="0"
                m="0"
              >
                <Image width={46} height={46} src={'/../public/Assets/advantagesIcon1.png'} alt="adv" />
                <Text
                  fontSize={{ lg: "18px", md: "13px", base: "15px" }}
                  color="#171923"
                  fontWeight="700"
                  w={{lg: "220px", md: '190px', base: '90%'}}
                >
                  No setup fees 100% hassle-free
                </Text>
              </Container>
              <Container
                maxW="100%"
                display="flex"
                alignItems="center"
                gap="20px"
                p="0"
                m="0"
              >
                <Image width={46} height={46} src={'/../public/Assets/advantagesIcon2.png'} alt="adv" />
                <Text
                  fontSize={{ lg: "18px", md: "13px", base: "15px" }}
                  color="#171923"
                  fontWeight="700"
                  w={{lg: "220px", md: '190px', base: '90%'}}
                >
                  No monthly subscription Pay once and for all
                </Text>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
