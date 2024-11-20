package com.bank.service;

import com.bank.model.Account;
import com.bank.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BankService {

    @Autowired
    private AccountRepository accountRepository;

    public Account login(String username) {
        return accountRepository.findByUsername(username);
    }

    public Account withdraw(String username, double amount) {
        Account account = accountRepository.findByUsername(username);
        if (account != null && account.getBalance() >= amount) {
            account.setBalance(account.getBalance() - amount);
            accountRepository.save(account);
        }
        return account;
    }

    public Account requestLoan(String username, double loanAmount) {
        Account account = accountRepository.findByUsername(username);
        if (account != null) {
            account.setLoan(account.getLoan() + loanAmount);
            accountRepository.save(account);
        }
        return account;
    }

    public Account getBalance(String username) {
        return accountRepository.findByUsername(username);
    }
}
