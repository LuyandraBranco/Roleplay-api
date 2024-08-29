import { assert } from '@japa/preset-adonis';
import test from "japa";

test.group('Example', () =>{
  test('assert sum', (assert) =>{
    assert.equal(2 + 2, 4)
  })
})
