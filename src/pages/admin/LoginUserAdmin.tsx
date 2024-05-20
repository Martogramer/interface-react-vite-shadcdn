import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import logo from '../assets/cool.png'

import login, { updateFormData, loginUser } from '../../features/login'
import { toast } from 'react-hot-toast'
import { RootState } from '../../store/Store'
import * as React from 'react';

const LoginUserAdmin: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const headingControls = useAnimation()

	const formData = useSelector((state: RootState) => state.login.formData)
	const isLoading = useSelector((state: RootState) => state.login.isLoading)
	const error = useSelector((state: RootState) => state.login.error)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateFormData({ [e.target.name]: e.target.value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			dispatch(login(formData))
			localStorage.setItem('user', JSON.stringify(formData))
			await navigate('/')
		} catch (error: any) {
			toast.error(error.message)
		}
	}

	useEffect(() => {
		const startAnimation = async () => {
			await headingControls.start({
				x: 0,
				transition: { duration: 1.8, delay: 0.5 },
			})
		}

		startAnimation()
	}, [headingControls])

	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 2 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className='flex flex-col items-center justify-center h-screen m-8'>
				<img src={logo} alt='Cool-LOGO' className='flex w-[17vw] ml-36 mb-8 ' />
				<form className='w-full max-w-md p-6 ml-20' onSubmit={handleSubmit}>
					<div className='text-2xl mb-6'>
						<motion.h2 className='font-poppy text-5xl'>
							Hello! Login to get started!
						</motion.h2>
					</div>

					<div className='mb-6'>
						<input
							type='text'
							id='email'
							name='email'
							className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500 placeholder-opacity-75 font-poppy'
							value={formData.email}
							onChange={handleChange}
							required
							placeholder='Email'
						/>
					</div>

					<div className='mb-6'>
						<input
							type='password'
							id='password'
							name='password'
							className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-200 placeholder-gray-500 placeholder-opacity-75 font-poppy'
							value={formData.password}
							onChange={handleChange}
							required
							placeholder='Password'
						/>
					</div>

					{isLoading ? (
						<p>Loading...</p>
					) : (
						<>
							{error && <p className='text-red-500'>Error: {error}</p>}
							<div className='flex flex-col items-center'>
								<button
									type='submit'
									className='bg-orange-700 w-full hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2'
								>
									Login
								</button>

								<span className='border-t border-gray-300 w-full text-center my-2'>
									{' '}
									Or Login with
								</span>

								<div className='flex'>
									<button className='flex items-center justify-center text-blue-600 hover:text-blue-900 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2'>
										<span className='border border-gray-300 rounded-md bg-white p-3'>
											!
										</span>
									</button>
									<button className='flex items-center justify-center text-red-600 hover:text-red-700 font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'>
										<span className='border border-gray-300 rounded-md bg-white p-3'>
											!
										</span>
									</button>
								</div>
							</div>
						</>
					)}
					<div className='flex flex-col items-center mt-4'>
						<p>
							Don't have an account?{' '}
							<span
								className='text-orange-600 cursor-pointer'
								onClick={() => navigate('/register')}
							>
								Register
							</span>
						</p>
					</div>
				</form>
			</div>
		</motion.div>
	)
}

export default LoginUserAdmin