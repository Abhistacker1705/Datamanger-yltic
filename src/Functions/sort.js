export function sortComments(filteredData, sortOrderFlag, sortColumn) {
	return filteredData.sort((a, b) => {
		if (sortOrderFlag === true && sortColumn === "Date") {
			return new Date(a.at) - new Date(b.at)
		} else if (sortOrderFlag === false && sortColumn === "Date") {
			return new Date(b.at) - new Date(a.at)
		} else if (sortOrderFlag === true && sortColumn === "Author") {
			return a.author.localeCompare(b.author)
		} else if (sortOrderFlag === false && sortColumn === "Author") {
			return b.author.localeCompare(a.author)
		} else if (sortOrderFlag === true && sortColumn === "Comment") {
			return a.text.localeCompare(b.text)
		} else if (sortOrderFlag === false && sortColumn === "Comment") {
			return b.text.localeCompare(a.text)
		} else if (sortOrderFlag === true && sortColumn === "Likes") {
			return a.like - b.like
		} else if (sortOrderFlag === false && sortColumn === "Likes") {
			return b.like - a.like
		} else if (sortOrderFlag === true && sortColumn === "Replies") {
			return a.reply - b.reply
		} else if (sortOrderFlag === false && sortColumn === "Replies") {
			return b.reply - a.reply
		} else {
			return
		}
	})
}
