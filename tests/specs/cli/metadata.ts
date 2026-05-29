import { testSuite, expect } from 'manten';
import { createFixture } from '../../utils.js';

export default testSuite(({ describe }) => {
	describe('metadata', ({ test }) => {
		test('shows aicommits-cn as the CLI name in help output', async () => {
			const { fixture, aicommits } = await createFixture();

			const { stdout } = await aicommits(['--help']);

			expect(stdout).toMatch('aicommits-cn');
			expect(stdout).toMatch('Usage:');
			expect(stdout).toMatch('aicommits-cn [flags...]');
			expect(stdout).toMatch('Chinese-first AI git commit message CLI');

			await fixture.rm();
		});
	});
});