let recipes = {
    apiKey : '3fbe81e75b6646a78f6246171d6bb992',
    fetchRecipes: function(item)
    {
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+ this.apiKey +"&query="+ item)
        .then((response) => response.json())
        .then((data) => this.displayRecipe(data));
    },
    displayRecipe: function(data) 
    {
        if(data.results.length == 0 || data.results == null)
        {
            document.querySelector(".post_wrapper").innerHTML = "<h3 style='text-align: center;color: #fff;'>Result not found</h3>";
        }
        else
        {
            html = "";
            for(let i = 0; i < data.results.length; i++)
            {
                html +=`<div class="post">
                    <div class="post-header">
                        <img src="${data.results[i].image}" alt="img">
                    </div>
                    <div class="post-body">
                        <small>${data.results[i].title}</small>
                    </div>
                </div>`;
            }
            document.querySelector(".post_wrapper").innerHTML = html;
        }
    },
    search: function()
    {
        recipes.fetchRecipes(document.querySelector("#search").value);
    }
};

document.querySelector("#search_btn").addEventListener("click", function(){
    recipes.search();
});

document.querySelector("#search").addEventListener("keyup", function(event){
    if(event.key == "Enter")
    {
        recipes.search();
    }
});