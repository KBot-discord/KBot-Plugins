import '../../dist/register';
import { SapphireClient } from '@sapphire/framework';
import type { MockModule } from './modules/MockModule';
import type { ModuleCommand } from '@kbotdev/plugin-modules';

export const mockClient = new SapphireClient({
	intents: [],
	baseUserDirectory: null,
	modules: {
		enabled: true,
		loadModuleErrorListeners: true
	}
});

export function getMockModule() {
	const store = mockClient.stores.get('modules');
	return store.get('MockModule') as MockModule;
}

export function getMockModuleCommand() {
	const store = mockClient.stores.get('commands');
	return store.get('mockmodulecommand') as ModuleCommand<MockModule>;
}
