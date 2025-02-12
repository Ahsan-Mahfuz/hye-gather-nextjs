import React from 'react'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import rightSideImage from '../../assets/forgetPassword.png'

const ForgetPassword = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    navigate('/otp-sent')
  }

  return (
    <div className="h-screen flex  flex-col lg:flex-row z-50">
      <div className="w-1/2 hidden lg:block">
        <img
          src={rightSideImage}
          alt="password-reset"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 max-lg:w-full h-screen  flex flex-col justify-center items-center p-12  ">
        <h1
          className="text-[50px] font-bold mb-2 text-center"
          style={{ fontSize: 'clamp(20px, 10vw, 50px)' }}
        >
          Forgot Password?
        </h1>
        <p
          className="text-lg mb-8 text-center"
          style={{ fontSize: 'clamp(12px, 5vw, 20px)' }}
        >
          Please enter your email to get verification code
        </p>

        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="w-full max-w-sm"
        >
          <Form.Item
            name="email"
            label={<span>Email</span>}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please enter your email!',
              },
            ]}
          >
            <Input
              placeholder="Enter Email"
              className="h-[42px]  px-4 bg-black border-gray-300 rounded-md"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                padding: '1.25rem',
              }}
              className="w-full rounded-full h-11 mt-10"
            >
              Reset password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default ForgetPassword
