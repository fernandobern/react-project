import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './Bargraphic.css'

const data = [
  { name: 'Jan', valor: 30 },
  { name: 'Fev', valor: 80 },
  { name: 'Mar', valor: 45 },
  { name: 'Abr', valor: 60 },
  { name: 'Mai', valor: 95 },
]

export default function Bargraphic() {
  return (
    <div className='grafico-barras'>
        <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="valor" fill="#00bcd4" radius={[4, 4, 0, 0]} />
        </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
