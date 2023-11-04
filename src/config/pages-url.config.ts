class PAGES {
	private root = '/'

	HOME = this.root
	MESSAGES = `${this.root}/messages`
	TASKS = `${this.root}/tasks`
	TEAMS = `${this.root}/teams`
	CALENDAR = `${this.root}/calendar`
}

export const PAGES_URL = new PAGES()