import { Container, Card, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import publicPaths from "../../routes/paths/publicPaths";

const LoginPage = () => {
	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight }}
		>
			<Card className='.cardWidth p-5 w-auto'>
				<h2 className='m-auto'>Авторизация</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						className='mt-5'
						placeholder='Введите login'
					/>
					<Form.Control
						className='mt-4 mb-4'
						type='password'
						placeholder='Введите пароль'
					/>
					<Button
						variant='outline-success'
						className='mt-2'
					>
						Войти
					</Button>
				</Form>
				<hr />
				<div className='d-flex flex-column  align-items-center'>
					<NavLink
						className='link-primary mt-2'
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
			</Card>
		</Container>
	);
};

export default LoginPage;
