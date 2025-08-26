import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const EmailVerification = (props: {
  userEmail: string;
  verificationUrl: string;
}) => {
  const { verificationUrl } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Verify your email address to get started with Flow Mind</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[580px] mx-auto px-[40px] py-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Welcome to Flow Mind
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Let&apos;s verify your email to get you started
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[16px]">
                Hi there,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[16px]">
                Thank you for signing up for Flow Mind! We&apos;re excited to
                have you on board.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[24px]">
                To complete your registration and start using Flow Mind, please
                verify your email address by clicking the button below:
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[6px] text-[16px] font-medium no-underline box-border inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0 mb-[16px]">
                If the button doesn&apos;t work, you can also copy and paste
                this link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 leading-[20px] m-0 break-all">
                {verificationUrl}
              </Text>
            </Section>

            {/* Security Note */}
            <Section className="mb-[32px] p-[16px] bg-gray-50 rounded-[6px]">
              <Text className="text-[14px] text-gray-700 leading-[20px] m-0 mb-[8px] font-medium">
                Security Note:
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0">
                This verification link will expire in 24 hours for your
                security. If you didn&apos;t create an account with Flow Mind,
                you can safely ignore this email.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                Flow Mind Team
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                32 Thuy Loi Street, District 9
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                Ho Chi Minh City, Vietnam
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                © 2025 Flow Mind. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailVerification;
