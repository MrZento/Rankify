import { CommandContext } from '../../../../src/structures/addons/CommandAddons';
import { Command } from '../../../../src/structures/Command';
import { getSuccessfulSignalEmbed } from '../../../../src/handlers/locale';
import { addSignal } from '../../../../src/api';
import { config } from '../../../../src/config';

class SignalCommand extends Command {
    constructor() {
        super({
            trigger: 'signal',
            description: 'If configured, this will store a command and make it available through our API.',
            type: 'ChatInput',
            module: 'information',
            args: [
                {
                    trigger: 'signal',
                    description: 'What signal/command would you like to run?',
                    required: false,
                    type: 'String',
                },
            ],
            permissions: [
                {
                    type: 'role',
                    ids: config.permissions.signal,
                    value: true,
                }
            ]
        });
    }

    async run(ctx: CommandContext) {
        addSignal(ctx.args['signal']);
        return ctx.reply({ embeds: [ getSuccessfulSignalEmbed() ] });
    }
}

export default SignalCommand;