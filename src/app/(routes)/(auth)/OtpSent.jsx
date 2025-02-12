import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import rightSideImage from '../../assets/forgetPassword.png'
import toast from 'react-hot-toast'

const OtpSent = () => {
  const Navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus()
    }
  }
  const validateOtp = () => {
    const joinedOtp = otp.join('')
    if (joinedOtp.length !== 6) {
      return Promise.reject(new Error('Please enter a 6-digit code!'))
    }
    return Promise.resolve()
  }

  const onFinishOtp = () => {
    console.log(otp)
    Navigate('/set-new-password')
  }

  return (
    <div className="h-screen flex  flex-col lg:flex-row">
      <div className="w-1/2 hidden lg:block">
        <img src={rightSideImage} alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className=" mx-auto lg:w-1/2 h-screen  flex flex-col justify-center items-center p-12 ">
        <div className="flex items-center flex-col max-w-[500px] w-full">
          <h1
            className="font-bold mb-2 text-center"
            style={{ fontSize: 'clamp(20px, 8vw, 40px)' }}
          >
            Check your email
          </h1>
          <p
            className="text-xl mb-8  text-center"
            style={{ fontSize: 'clamp(12px, 5vw, 20px)' }}
          >
            We sent a reset link to <strong>contact@dscode...com</strong> enter
            6 digit code that mentioned in the email
          </p>
        </div>

        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinishOtp}
          className="w-full max-w-md overflow-y-scroll scrollbar-none"
        >
          <Form.Item name="otp" rules={[{ validator: validateOtp }]}>
            <div className="flex gap-2">
              {otp.map((_, index) => (
                <Input
                  key={index}
                  id={`otp-${index}`}
                  maxLength={1}
                  className="w-12 h-[42px] text-center border-gray-300 rounded-md"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                />
              ))}
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded-full h-11 mt-5"
            >
              Verify
            </Button>
          </Form.Item>
        </Form>
        <div className="  text-xs">
          You have not received the email?
          <Link to={`/otp-sent`} className=" hover:underline text-blue-800">
            Resend
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OtpSent
