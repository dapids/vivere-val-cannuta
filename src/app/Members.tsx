'use client';

import { Number } from '@/lib/Components';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Text = styled.p.withConfig({
  shouldForwardProp: (prop) => !['ready'].includes(prop),
})<{ ready: boolean }>`
  visibility: ${({ ready }) => ready ? 'visible': 'hidden' };
`

const getMembers = () => fetch('https://discord.com/api/guilds/1275895301152047166/widget.json')

export const Members = () => {
  const [members, setMembers] = useState<number | null>()

  useEffect(() => {
    const run = async () => {
      const payload = await getMembers()
      const data = await payload.json()

      setMembers(data.presence_count)
    }

    run().catch(() => {})
  }, [])

  return members === 1
  ? <Text ready={!!members}>Al momento c&apos;è <Number>{members}</Number> utente online.</Text>
  : <Text ready={!!members}>Al momento ci sono <Number>{members}</Number> utenti online.</Text>
}
