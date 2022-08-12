let navbar = () =>{
    return `
    <div id="search_bar">
    <input type="text" id="query">
</div>
<div id="categories">
    <h3 id="Nature" >Nature</h3 >
    <h3 id="Cars">Cars</h3 >
    <h3 id="Music">Music</h3 >
    <h3 id="Cartoons">Cartoons</h3 >
    <h3 id="Technologies">Technologies</h3 >
    <h3 id="Marval">Marval</h3>
    <h3>
        <select id="sortBy">
            <option value="latest">latest</option>
            <option value="popular">popular</option>
            <option value="oldest">oldest</option>
        </select>
    </h3>
    <h3>
        <select id="filterBy">
            <option value="landscape">landscape</option>
            <option value="portrait">portrait</option>
            <option value="squarish">squarish</option>
        </select>
    </h3>
</div>`;
}

export {navbar}