var planetUrl = "https://swapi.dev/api/planets/?page=1";
var peopleUrl = "https://swapi.dev/api/people/?page=1";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
            Movies: [],
			Forum: [],
			comment: []
		},
		actions: {
			getCharacters: async () => {
				let peopleStored = [];
				for (let i = 0; i < 9; i++) {
					let response = await fetch(peopleUrl);
					let responseAsJson = await response.json();
					responseAsJson.results.map(element => {
						peopleStored.push(element);
					});
					setStore({ people: peopleStored });
					if (responseAsJson.next != null) {
						peopleUrl = responseAsJson.next.replace("http:", "https:");
					}
				}
			},

			// TODO: Work on a proper pagination.
			getPlanets: async () => {
				let planetsStored = [];
				for (let i = 0; i < 6; i++) {
					let response = await fetch(planetUrl);
					let responseAsJson = await response.json();
					responseAsJson.results.map(element => {
						planetsStored.push(element);
					});
					setStore({ planets: planetsStored });
					if (responseAsJson.next != null) {
						planetUrl = responseAsJson.next.replace("http:", "https:");
					}
				}
			
			},

			getOneCharacter: async (id) => {
				let response = await fetch("https://swapi.dev/api/people/" + id + "/");
				let responseAsJson = await response.json();
				
				return responseAsJson;
			},

			getDiscussions: async () => {
				let response = await fetch("http://localhost:8000/discussions");
				let responseAsJson = await response.json();
				setStore({Forum: responseAsJson})
				return responseAsJson;

			},

			startNewDiscussion: async (newTitle, newDescription) => {
				let newDiscussion = {
					"title": newTitle,
					"description": newDescription,
					"comments": []
				}
				let response = await fetch("http://localhost:8000/discussions", {
					method: 'POST',
					body: JSON.stringify(newDiscussion),
					headers: {"Content-type": "application/json"}
				});
				let responseAsJson = await response.json();
				console.log(newTitle, newDescription, " post info")
				getActions().getDiscussions();
				return responseAsJson;
				
			},
			getOneDiscussion: async (discussionId) => {
				console.log("discussion")
				let url = "http://localhost:8000/discussions/" + discussionId;
				let response = await fetch(url);
				console.log(response, "response");
				let responseAsJson = await response.json();
				setStore({comment: responseAsJson})
				return responseAsJson;
			},

			addComment: async (discussionId, commentsArray) => {
				let url = "http://localhost:8000/discussions/" + discussionId;
				let response = await fetch(url, {
					method: "PATCH",
					body: JSON.stringify({
						"comments": commentsArray,
					}),
					headers: {"Content-type": "application/json"}
				})
				return response;
			}
		}
	};
};

export default getState;
