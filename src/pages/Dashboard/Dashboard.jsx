import './Dashboard.css'
//import '../../styles/global.css'
import Card from '../../components/Card/Card'
import CardFullSize from '../../components/CardFullSize/CardFullSize'
import Graphic from '../../components/Graphic/Graphic'
import Bargraphic from '../../components/BarGraphic/Bargraphic'
import Button from '../../components/Button/Button'

function Dashboard() {
    return (
        <div className='card-wrapper'>
            <Card className='card' title="Vendas">
                <Graphic/>
                <p>Venda mensal de produtos.</p>
            </Card>

            <Card className='card' title="Conversão">
                <Bargraphic/>
                <p>Conversão mensal.</p>
            </Card>

            <Card className='card' title="Tarefas">
                <h5>Criar nova campanha</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h5>Verificar novos insights</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <Button title="Criar nova tarefa"/>
                <br />
            </Card>
        </div>
    )
}

export default Dashboard