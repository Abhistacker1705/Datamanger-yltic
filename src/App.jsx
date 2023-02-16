import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "./components/Navbar"
import Loader from "./components/Loader"
import Table from "./components/Table"

function App() {
	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		async function dataFetch() {
			setLoading(true)
			const res = await axios.get("https://dev.ylytic.com/ylytic/test")
			setComments(res.data.comments)
		}
		dataFetch()
	}, [])

	useEffect(() => {
		if (loading) setLoading(false)
	}, [comments])

	return (
		<div className='App'>
			<Navbar />
			{loading ? <Loader /> : <Table comments={comments} setComments={setComments} />}
		</div>
	)
}

export default App
