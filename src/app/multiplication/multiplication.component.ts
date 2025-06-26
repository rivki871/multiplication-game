import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-multiplication',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent {
  score = 0;
  currentQuestion = '';
  currentAnswer = 0;
  userAnswer = '';
  timeLeft = 60;
  isGameActive = false;
  timer: any;
  gameOverMessage = '';
  numberButtons = Array.from({ length: 10 }, (_, i) => i); // [0-10]

  constructor() { }

  startGame() {
    this.score = 0;
    this.timeLeft = 60;
    this.isGameActive = true;
    this.gameOverMessage = '';
    this.generateQuestion();
    this.startTimer();
  }

  generateQuestion() {
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    this.currentQuestion = `${num1} × ${num2}`;
    this.currentAnswer = num1 * num2;
  }

  selectNumber(n: number) {
    if (!this.isGameActive) return;
    if (this.userAnswer.length < 3) {
      this.userAnswer += n.toString();
    }
  }

  clearAnswer() {
    if (!this.isGameActive) return;
    this.userAnswer = this.userAnswer.slice(0, -1);
  }

  checkAnswer() {
    if (!this.isGameActive) return;
    const answer = parseInt(this.userAnswer, 10);
    if (answer === this.currentAnswer) {
      this.score++;
      this.launchConfetti();
    }
    this.userAnswer = '';
    this.generateQuestion();
  }

  launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#bb0000', '#ffffff', '#00bb00'],
      shapes: ['circle'],
      scalar: 1.2
    });
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.isGameActive = false;
        this.playWinSound();
        this.gameOverMessage = `!המשחק נגמר! פתרת ${this.score} תרגילים נכונים`;
      }
    }, 1000);
  }

  playWinSound() {
    const audio = new Audio();
    audio.src = 'assets/applause.mp3';
    audio.load();
    audio.play();
  }

}