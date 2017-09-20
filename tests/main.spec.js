// rodar teste: npm test
// rodar teste parando no primeiro erro: npm test -- --bail
// rodar somente um caso: context.only
// pular o teste: it.skip

describe('Main', function () {
  describe('Method A', function () {
    context('case 1', function () {
      it.skip('should happen test case 1', function () {

        throw new Error('Erro case 1')
      });
    });

    context('case 2', function () {
      it('should happen test case 2.0', function () {

        throw new Error('Erro case 2')
      });

      it('should happen test case2.1', function () {

      });
    });
  });

  describe('Method B', function () {

  });
});
