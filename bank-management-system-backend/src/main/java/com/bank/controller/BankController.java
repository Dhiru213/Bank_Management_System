package com.bank.controller;

import com.bank.model.Account;
import com.bank.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bank")
public class BankController {

    @Autowired
    private BankService bankService;

    @PostMapping("/login")
    public Account login(@RequestParam String username) {
        return bankService.login(username);
    }

    @PostMapping("/withdraw")
    public Account withdraw(@RequestParam String username, @RequestParam double amount) {
        return bankService.withdraw(username, amount);
    }

    @PostMapping("/loan")
    public Account requestLoan(@RequestParam String username, @RequestParam double loanAmount) {
        return bankService.requestLoan(username, loanAmount);
    }

    @GetMapping("/balance")
    public Account getBalance(@RequestParam String username) {
        return bankService.getBalance(username);
    }
}
