import React from "react"

const TableRow = ({ data, index }) => {
	return (
		<>
			<tr key={index}>
				<td>{data.at}</td>
				<td>{data.author}</td>
				<td>{data.like}</td>
				<td>{data.reply}</td>
				<td>{data.text}</td>
			</tr>
		</>
	)
}

export default TableRow
