export function filterComments(comments, filterquery, queryLength) {
	return comments.filter((datas) => {
		return (
			datas.author.slice(0, queryLength).toLowerCase().includes(filterquery.toLowerCase()) ||
			datas.text.toLowerCase().includes(filterquery.toLowerCase())
		)
	})
}

export default filterComments
