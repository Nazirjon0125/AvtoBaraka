import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	public getHello(): string {
		return 'Welcome to AvtoBaraka BATCH Server!';
	}

	public batchRollback(): string {
		return 'batchRollback!';
	}

	public batchTopProperties(): string {
		return 'batchTopProperties!';
	}

	public batchTopAgents(): string {
		return 'batchTopAgents!';
	}
}
