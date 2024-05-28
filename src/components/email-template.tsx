import * as React from "react";
import { Body, Link, Container, Column, Head, Heading, Html, Row, Section, Text } from "@react-email/components";

interface EmailTemplateProps {
    dataReceived: {
        emailToSend: string;
        userName: string;
        fileName: string;
        fileSize: number;
        fileType: string;
        shortUrl: string;
    };
}

export const EmailTemplate = ({ dataReceived }: EmailTemplateProps) => {
    const { emailToSend, userName, fileName, fileSize, fileType, shortUrl } = dataReceived;

    return (
        <Html>
            <Head />
            <Body style={main}>
                <Container>
                    <Section style={logo}>
                        <Heading
                            style={{
                                fontSize: 46,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Dynamic Docs
                        </Heading>
                    </Section>
                    <Section style={content}>
                        <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                            <Column>
                                <Heading
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Hello, {emailToSend?.split("@")[0]}
                                </Heading>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    {userName} has shared a file with you.
                                </Heading>

                                <Text style={paragraph}>
                                    <b>Name: </b>
                                    {fileName}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Size: </b>
                                    {fileSize} bytes
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Type: </b>
                                    {fileType}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Link: </b>
                                    {shortUrl}
                                </Text>
                                <Text
                                    style={{
                                        color: "rgb(0,0,0, 0.5)",
                                        fontSize: 14,
                                        marginTop: -5,
                                    }}
                                >
                                    *Access and Download file on your own risk.
                                </Text>

                                <Text style={{ ...paragraph, marginTop: -5 }}>Click on download button to download the file.</Text>
                            </Column>
                        </Row>
                        <Row style={{ ...boxInfos, paddingTop: "0" }}>
                            <Column style={containerButton} colSpan={2}>
                                <Link style={button} target="_blank" href={shortUrl}>
                                    Download
                                </Link>
                            </Column>
                        </Row>
                    </Section>

                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 12,
                            color: "rgb(0,0,0, 0.7)",
                        }}
                    >
                        © 2024 | Dynamic Docs
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

const main = {
    backgroundColor: "#fff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 14,
};

const logo = {
    padding: "30px 20px",
    backgroundColor: "#00bbff",
    height: "100px",
};

const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
};

const button = {
    backgroundColor: "#00aaff",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
};

const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
    margin: "10px",
};

const boxInfos = {
    padding: "20px",
};
