import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './Graphic.css'

const data = [
  { name: 'Jan', valor: 90 },
  { name: 'Fev', valor: 70 },
  { name: 'Mar', valor: 150 },
  { name: 'Abr', valor: 190 },
]

export default function Graphic() {
  return (
    <div className='grafico'>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="valor" stroke="#00bcd4" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  )
}