export class PaginationDto {
	public meta: {
		total: number
	}

	constructor(
		public items: object[],
		total: number
	) {
		this.meta = {
			total
		}
	}
}
