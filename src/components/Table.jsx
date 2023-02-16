import { React, useState } from "react"
import { sortComments } from "../Functions/sort"
import { filterComments } from "../Functions/filter"
import TableRow from "./TableRow"

const Table = ({ comments }) => {
	const [sortColumn, setSortColumn] = useState("")
	const [searchQuery, setSearchQuery] = useState("")
	const [sortOrderFlag, setSortOrderFlag] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [usersPerPage, setUsersPerPage] = useState(25)

	// paginate function
	const paginate = (e, pageNo) => {
		e.preventDefault()
		setCurrentPage(pageNo)
	}

	const changeUsersPerPage = (event) => {
		console.log(event.target.value)
		setUsersPerPage(event.target.value)
		setCurrentPage(1)
	}
	//sorting order setting function
	const sortfield = (column) => {
		if (sortColumn === column) {
			setSortOrderFlag(!sortOrderFlag)
		} else {
			setSortColumn(column)
			setSortOrderFlag(true)
		}
	}
	const filteredData = filterComments(comments, searchQuery, searchQuery.length)
	const sortedData = sortComments(filteredData, sortOrderFlag, sortColumn)

	const indexOfLastUser = currentPage * usersPerPage
	const indexOfFirstUser = indexOfLastUser - usersPerPage
	const paginatedDatas = sortedData.slice(indexOfFirstUser, indexOfLastUser)

	const pageNumber = []
	const totalUsers = sortedData.length
	for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumber.push(i)
	}

	const searchHandler = (event) => {
		setSearchQuery(event.target.value)
	}

	return (
		<>
			<div>
				<select className='Select__users' onChange={(e) => changeUsersPerPage(e)}>
					<option className='Select__users_options' value='25'>
						25 per page
					</option>
					<option className='Select__users_options' value='50'>
						50 per page
					</option>
					<option className='Select__users_options' value='100'>
						100 per page
					</option>
				</select>

				<ul className='page__ul'>
					{pageNumber.map((pageIndex, index) => (
						<li key={index} className='page__li'>
							<a className='page__anchor' onClick={(e) => paginate(e, pageIndex)} href='#!'>
								{pageIndex}
							</a>
						</li>
					))}
				</ul>

				<input className='filter__input' type='text' placeholder='Search' onChange={searchHandler} />
				<table className='tablesss'>
					<thead>
						<tr onClick={(e) => sortfield(e.target.innerText)}>
							<th>Date</th>
							<th>Author</th>
							<th>Likes</th>
							<th>Replies</th>
							<th>Comment</th>
						</tr>
					</thead>

					<tbody>
						{paginatedDatas.map((data, index) => (
							<TableRow key={index} data={data} />
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Table
