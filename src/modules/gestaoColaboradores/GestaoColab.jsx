import './gestao.css';
import { AiOutlineDownload, AiOutlineUsergroupAdd, AiOutlineUserDelete, AiOutlineCalendar } from 'react-icons/ai';

export default function GestaoColab () {
	return (
		<div className="gestaoColab">
			<h1>Gestão de<br />Colaboradores</h1>
			<p id='gesexp'>A inclusão ou exclusão de colaboradores funciona da seguinte maneira!</p>
			<div className="flexGestao">
				<div className="inclusoes">
					<div className="container-inclusoes">
						<div className="headInclusoes">
							<h2>INCLUSÕES</h2>
							<p>(Novos colaboradores)</p>
						</div>

						<AiOutlineUsergroupAdd />

						<p><strong>Envio de planilha padrão (modelo fornecido) com:</strong><br /><br />número da matrícula do funcionário <span>+</span> nome completo <span>+</span> RG <span>+</span> CPF <span>+</span> data de nascimento. </p>
						<p style={{color: 'gray', fontSize: 12}}>A empresa fica responsável por nos encaminhar uma planilha em <strong><span>Excel</span></strong> ou <strong><span>Google Sheets</span></strong>, com as informações dos funcionários</p>						
						<a href="./assets/Exmplo Planilha - Convênio Empresa Coocerqui 2025.xls" download={'Exmplo Planilha - Convênio Empresa Coocerqui 2025'} id='downloader'><AiOutlineDownload size={20} />Baixar modelo de planilha</a>
					</div>
				</div>
				<div className="exclusoes">
					<div className="container-exclusoes">
						<div className="headExclusoes">
							<h2>EXCLUSÕES</h2>
							<p>(Demissões)</p>
						</div>

						<AiOutlineUserDelete />

						<p><strong>Envio da mesma planilha padrão (modelo fornecido do inclusões de funcionário) com:</strong><br /><br /> número da matrícula do funcionário, RG e CPF. </p>
					</div>
				</div>
			</div>

			<div className="gestaoAlert">
				<AiOutlineCalendar />
				<div className="contentAlert">
					<h2>Início do uso:</h2>
					<p>Após contrato assinado em até 3 dia uteis.</p>
				</div>
			</div>

		</div>
	)
}