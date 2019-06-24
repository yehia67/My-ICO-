pragma solidity 0.5.0;
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol';

contract YehiaCoin is ERC20Mintable {
    string public name = "Yehia Coin";
    string public symbol = "YTA";
    uint8 public decimals = 18;
}