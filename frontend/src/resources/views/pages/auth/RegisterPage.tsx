import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export const RegisterPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
    password_confirmation: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    if (form.password !== form.password_confirmation) {
      setErrors({ password: "As senhas não coincidem" })
      return
    }

    try {
      await axios.post("http://localhost:3001/api/auth/register", {
        nome: form.nome,
        email: form.email,
        password: form.password,
      })
      alert("Usuário registrado com sucesso!")
      navigate("/login")
    } catch (err: any) {
      const msg = err?.response?.data?.error || "Erro ao registrar"
      setErrors({ general: msg })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrar</h2>

        {errors.general && <p className="text-red-500 text-sm mb-2">{errors.general}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Registrar
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-800 hover:underline ml-1">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
