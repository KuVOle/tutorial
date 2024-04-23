import { Container, Card, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import publicPaths from "../../routes/paths/publicPaths";
import { useState } from "react";
import { loginAPI } from "../../http/autorizationAPI";
const LoginPage = () => {
	const [auth, setAuth] = useState({
		email: "",
		password: "",
	});
	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight }}
		>
			<Card className='.cardWidth p-5 w-auto'>
				<h2 className='m-auto'>Авторизация</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						type='email'
						className='mt-4'
						placeholder='Email или Login'
					/>
					<Form.Control
						className='mt-4 mb-4'
						type='password'
						placeholder='Пароль'
					/>
					<Button
						variant='outline-success'
						className='mt-2'
						onClick={() => loginAPI(auth)}
					>
						Войти
					</Button>
				</Form>
				<hr />
				<div className='d-flex flex-column align-items-center'>
					<NavLink
						className='link-primary'
						to={publicPaths.registration}
					>
						Зарегистрироваться
					</NavLink>
					<NavLink
						className='link-warning mt-3'
						to={publicPaths.restore}
					>
						Восстановить пароль
					</NavLink>
				</div>
				<hr />
			</Card>
		</Container>
	);
};

export default LoginPage;
