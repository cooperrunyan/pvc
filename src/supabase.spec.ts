import 'jest';
import { supabase } from './supabase';

describe('Supabase', () => {
  it('Can access institutions', async () => {
    const { error } = await supabase.from('institutions').select('*');
    if (error) throw error;
  });
});
